import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import User from 'App/Models/User';


export default class UserController { 

    public async index() {
         return User.all()
    }

    public async store(httpContext: HttpContextContract) {
        let newUser = httpContext.request.body();
        return httpContext.response.status(201).send(await User.create(newUser));
    }
}