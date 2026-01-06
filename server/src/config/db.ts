import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

const connectDB = async (): Promise<void> => {
    try {
        // const mongoURI = process.env.MONGO_URI;
        const mongoURI = "mongodb://127.0.0.1:27017/birdlist_db";

        if (!mongoURI) {
            console.error('ERRO: A variável MONGO_URI não está definida no .env');
            process.exit(1);
        }

        await mongoose.connect(mongoURI);

        console.log(`MongoDB Conectado com sucesso!`);

    } catch (error) {
        console.error('Erro ao conectar no MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;