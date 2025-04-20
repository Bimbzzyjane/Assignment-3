import {getModelForClass, prop} from '@typegoose/typegoose';

export class User {

@prop({required: true})
first_name: string;

@prop({required: true})
last_name: string;

@prop({required: true, unique: true})
email: string;

@prop({required: true})
password:string;
}
const UserModel = getModelForClass(User, {
    schemaOptions: { timestamps: true },
    });

    export default UserModel;
/*This code snippet creates a Mongoose model for the User class using the @typegoose/typegoose library and exports it for use in other 
parts of the application.
getModelForClass: The getModelForClass function is provided by the @typegoose/typegoose library. It takes a TypeScript class (in this case,
 User) and converts it into a Mongoose model. This allows you to interact with MongoDB collections using the UserModel object, which 
 provides methods like find, create, update, and delete.
schemaOptions: The schemaOptions property is used to pass additional configuration options to the underlying Mongoose schema. Here, 
{ timestamps: true } is specified, which automatically adds createdAt and updatedAt fields to the schema. These fields are useful for 
 tracking when a document is created or last updated in the database.
Exporting the Model: The UserModel is exported as the default export of the module. This makes it easy to import and use in other parts 
of the application, such as in controllers or services, to perform database operations related to the User collection.
Purpose: This code is a critical part of the application's database layer. It bridges the gap between the User class (defined with 
TypeScript) and the MongoDB collection, enabling type-safe and schema-driven interactions with the database. By using @typegoose/typegoose,
the code leverages TypeScript's strong typing while simplifying the process of working with Mongoose.*/