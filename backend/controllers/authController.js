import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.JWT_SECRET;
const generateToken = (req, res) => {
    const payload = {
        timestamp: new Date().toISOString()
    };
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

  res.status(200).json({
    status: 'success',
    message: 'Token generado',
    token: token
  });
};

export { generateToken };
