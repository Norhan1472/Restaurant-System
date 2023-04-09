import { FormControl, ValidationErrors } from "@angular/forms";

export class SpaceValidator {
    static checkSpace(form:FormControl):ValidationErrors{
        if(form.value == null || form.value.trim() ===""){
            return {'noSpace':true}
        }else{
           return {'noSpace' : false}
        }
    }
}

