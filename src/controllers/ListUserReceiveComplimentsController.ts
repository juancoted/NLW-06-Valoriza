import { Request, Response } from "express"
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsServices";

class ListUserReceiveComplimentsController {

    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const lisUserReceiveComplimentsService = new ListUserReceiveComplimentsService();

        const compliments = await lisUserReceiveComplimentsService.execute(user_id);

        return response.json(compliments)
    }
}
export { ListUserReceiveComplimentsController }