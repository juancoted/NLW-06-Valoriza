import { Request, Response } from "express"
import { ListUserSendComplimentsService } from "../services/ListUserSendComplimentsServices";

class ListUserSendComplimentsController {

    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const lisUserSendComplimentsService = new ListUserSendComplimentsService();

        const compliments = await lisUserSendComplimentsService.execute(user_id);

        return response.json(compliments)
    }
}
export { ListUserSendComplimentsController }