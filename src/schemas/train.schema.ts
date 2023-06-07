import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Number } from 'mongoose';

export type TrainDocument = Train & Document;

@Schema()
export class Train {
  @Prop({ required: true })
  trainName: string;

  @Prop()
  trainNumber?: number;

  @Prop()
  description?: string;
  required?: false;
  default?: '';

  @Prop()
  type?: string;

  @Prop()
  stops?: string;

  @Prop()
  duration?: string;

  @Prop()
  from?: string;

  @Prop()
  to?: string;

  @Prop()
  stations?: [
    {
      stationName: string;
      arrives: string;
      departs: string;
      stoptime: string;
      distance: string;
      day: string;
    },
  ];

  @Prop()
  completedAt?: Date;

  @Prop()
  createdAt: Date;

  @Prop()
  deletedAt?: Date;
}

export const TrainSchema = SchemaFactory.createForClass(Train);
