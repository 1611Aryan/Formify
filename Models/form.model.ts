import { Schema, model, Document } from 'mongoose';

export type formI = Document & {
  owner: {
    name: string;
    email: string;
    id: string;
  };
  formName: string;
  formDescription: string;
  questions: {
    question: string;
    question_id: string;
    question_type: string;
    question_options?: [string, string, string, string];
    question_required: boolean;
  }[];
  theme: {
    colorPallete: {
      primaryColor: string;
      secondaryColor: string;
    };
  };
  url: string;
  expiry: number;
};

const FormSchema = new Schema<formI>(
  {
    owner: {
      type: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        id: { type: String, required: true },
      },
      required: true,
      _id: false,
    },
    formName: {
      type: String,
      required: true,
    },
    formDescription: {
      type: String,
      required: true,
    },
    questions: {
      type: [
        {
          question: { type: String, required: true },
          question_type: { type: String, required: true },
          question_id: { type: String, required: true },
          question_options: { type: [String], required: true },
          question_required: Boolean,
        },
      ],
      required: true,
      _id: false,
    },
    theme: {
      type: {
        colorPallete: {
          primaryColor: { type: String, required: true },
          secondaryColor: { type: String, required: true },
        },
      },
      required: true,
      _id: false,
    },
    url: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default model<formI>('form', FormSchema);
