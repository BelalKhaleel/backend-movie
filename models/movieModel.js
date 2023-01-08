import mongoose from 'mongoose';

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    rating: {
      type: Number,
      requried: true,
      default: 4,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model('Movie', movieSchema);

export default Product;
