export class PerformanceEvaluation {
    id : number
    score : string
    details : string
    project_id : string
    person_id : string
    member_id : string
    constructor( id : number, score : string, details : string, project_id : string,
    person_id : string, member_id : string)
    {
            this.id =id ;
            this.score =score ;
            this.details =details ;
            this.project_id =project_id ;
            this.person_id =person_id ;
            this.member_id =member_id ;
    }
}