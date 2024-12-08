import bcrypt from 'bcrypt';

// Helper function to hash a password
export const hashPassword = async (password) => {
    try {
        // Generate salt and hash the password with saltRounds of 10
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        throw new Error(`Error hashing password: ${error.message}`);
    }
};

// Helper function to compare a password with the hashed password
export const comparePassword = async (password, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    } catch (error) {
        throw new Error(`Error comparing passwords: ${error.message}`);
    }
};