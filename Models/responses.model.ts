import { Schema, model, Document } from 'mongoose';
import { formI } from './form.model';
import { UserI } from './user.model';

type ResponseI = Document & {
  owner: UserI['owner'];
  formId: formI['_id'];
  formName: formI['formName'];
  page: number;
  responses: [
    {
      question_id: string;
      answer: string;
    }[]
  ];
};

const ResponseSchema = new Schema<ResponseI>(
  {
    owner: {
      type: {
        name: String,
        email: String,
      },
      required: true,
      _id: false,
    },
    formId: { type: String, required: true },
    formName: { type: String, required: true },
    page: { type: Number, required: true },
    responses: {
      type: [[{ question_id: String, answer: String }]],
      required: true,
      _id: false,
    },
  },
  {
    timestamps: true,
  }
);

export default model<ResponseI>('Responses', ResponseSchema, 'responses');
