import getDbInstance from '../../../lib/db';
import bcrypt from 'bcrypt';

const db = getDbInstance();

export default async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' });
    return;
  }

  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: 'Email and password are required' });
    return;
  }

  try {
    // Find the user with the given email
    const user = await db.oneOrNone('SELECT * FROM users WHERE email = $1', [
      email,
    ]);

    // If user not found, return an error
    if (!user) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    // Compare the given password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If the password is not valid, return an error
    if (!isPasswordValid) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    // If authentication is successful, return the user data (without the password)
    const { password: _, ...userWithoutPassword } = user;
    req.session.user = userWithoutPassword;
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred during login' });
  }
};
