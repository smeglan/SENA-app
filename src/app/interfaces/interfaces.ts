export interface TrainingCourses {
    totalResults: number;
    courses: Course[];
}

export interface Course {
    name: string;
    duration: number;
    description: string;
    requirements: string;
    type: string;
}