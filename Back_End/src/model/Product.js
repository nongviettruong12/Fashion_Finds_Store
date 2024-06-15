import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
import slug from "mongoose-slug-generator";
const ProductSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      require: true,
      minlength: 3,
    },
    product_author: {
      type: String,
      require: true,
      minlength: 3,
    },
    product_price: {
      type: Number,
      min: 0,
    },
    product_discount: {
      type: Number,
      min: 0,
    },
<<<<<<< HEAD
    
=======
    product_size: {
      type: String,
      // enum: ["xl", "l", "x", "m", "s"],
      default: "l",
    },
    product_color: {
      type: String,
      // enum: ["blue", "white", "black"],
      default: "black",
    },
>>>>>>> 2764b9a92c3516e35669535a30ab1bb8dcabd0fd
    product_images: {
      type: Object,
      require: true,
    },
    product_description_sort: {
      type: String,
    },
    product_quantity: {
      type: Number,
      min: 0,
      minlength: 0,
      maxlength: 1000,
    },
    // product_status: {
    //   type: Boolean,
    // },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      require: true,
    },
    review_count: { type: Number },
    average_score: { type: Number, default: 0 },
    slug: {
      type: String,
      slug: "product_name",
    },
  },
  { timestamps: true, versionKey: false }
);
mongoose.plugin(slug);
ProductSchema.plugin(mongoosePaginate);

export default mongoose.model("Product", ProductSchema);
