import mongoose, {Schema} from 'mongoose'

var ContactSchema = new Schema ({
    name: String,
    lastName: String,
    email: String,
    phoneNumber: Number,
    address: String,
    birthday: Date
})

export default mongoose.model('Contacts', ContactSchema);