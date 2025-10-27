export type CourseItem = {
    id:string,
    title:string,
    description:string,
    image:{
        url:string,
        alt:string,
    },
};

export type APIResponse = {
    data:{
        Development:CourseItem[],
        Business:CourseItem[],
        Lifestyle:CourseItem[],
        Design:CourseItem[],
    },
};