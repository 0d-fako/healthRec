import { Schema, model, Document } from 'mongoose';

interface IAppointment extends Document {
    patientName: string;
    doctorName: string;
    appointmentDate: Date;
    reason: string;
    status: 'Scheduled' | 'Completed' | 'Cancelled';
}

const AppointmentSchema = new Schema<IAppointment>({
    patientName: { type: String, required: true },
    doctorName: { type: String, required: true },
    appointmentDate: { type: Date, required: true },
    reason: { type: String, required: true },
    status: { 
        type: String, 
        enum: ['Scheduled', 'Completed', 'Cancelled'], 
        default: 'Scheduled' 
    },
}, { timestamps: true });

const Appointment = model<IAppointment>('Appointment', AppointmentSchema);

export default Appointment;