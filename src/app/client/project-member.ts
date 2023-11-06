export class ProjectMember {
    member_id : string
    active : string
    description : string
    personId : string
    profileId : string
    projectId : string
    
    constructor( member_id : string, active : string, description : string,personId : string
    , profileId : string, projectId : string)
    {
            this.member_id = member_id ;
            this.active = active ;
            this.description = description ;
            this.personId = personId ;
            this.profileId = profileId ;
            this.projectId = projectId;
    }
    
}