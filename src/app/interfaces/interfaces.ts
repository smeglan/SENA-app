export interface TrainingCourses {
    totalResults: number;
    courses: Course[];
}

export interface Course {
    name: string;
    duration: number;
    description: string;
    requirements: string;
    urlToImage?: string;
    type: string;
}

export interface ComponentMenu {
    icon: string;
    name: string;
    redirectTo: string;
}

export interface Formaciones {
  descripcion: string;
  id: number;
  img: string;
  title: string;
  url: string;
}
