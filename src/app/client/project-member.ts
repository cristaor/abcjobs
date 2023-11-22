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

export class ProjectMemberResponse {
    id : string
    name: string
    profile : string
    active : string
    performance: string
    description : string
    person_id : string 
    project_id : string
    
    constructor( id : string, name: string , profile : string, active : string,performance: string, description : string, person_id : string
    , project_id : string)
    {
            this.id = id ;
            this.name = name;
            this.profile = profile ;
            this.active = active ;
            this.performance = performance ;
            this.description = description ;
            this.person_id= person_id ;
            
            this.project_id = project_id;
            
    }
    
}