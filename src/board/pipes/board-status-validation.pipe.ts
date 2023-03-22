import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BoardStatus } from "../board-status.enum";

export class BoardStatusValidationPipe implements PipeTransform {

    readonly StatusOption = [BoardStatus.PRIVATE, BoardStatus.PUBLIC]

    transform(value: any) {

        value = String(value).toUpperCase();

        if (!this.isStatusValid(value)) {
            throw new BadRequestException(`${value} 값은 올바른 Status 목록이 아닙니다.`);
        }
        
        return value;
    }

    private isStatusValid(status: any) {
        const index = this.StatusOption.indexOf(status);
        return index !== -1;
    }

}