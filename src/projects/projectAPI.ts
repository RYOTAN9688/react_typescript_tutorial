import { Project } from "./Project";

const baseUrl = "http://localhost:4000";
const url = `${baseUrl}/projects`;

const translateStatusToErrorMessage = (status: number) => {
  switch (status) {
    case 401:
      return "Please login again";
    case 403:
      return "You do not have permission to view the project(s)";
    default:
      return "There was an error retrieving the project(s). Please try again";
  }
};

const checkStatus = (response: any) => {
  if (response.ok) {
    return response;
  } else {
    const httpErrorInfo = {
      status: response.status,
      statusText: response.statusText,
      url: response.url,
    };
    console.log(`log server http error: ${JSON.stringify(httpErrorInfo)}`);

    let errorMessage = translateStatusToErrorMessage(httpErrorInfo.status);
    throw new Error(errorMessage);
  }
};

const parseJSON = (response: Response) => {
  return response.json();
};

function delay(ms: number) {
  return function (x: any): Promise<any> {
    return new Promise((resolve) => setTimeout(() => resolve(x), ms));
  };
}

const convertToProjectModel = (item: any): Project => {
  return new Project(item);
};

const convertToProjectModels = (data: any[]): Project[] => {
  let projects: Project[] = data.map(convertToProjectModel);
  return projects;
};

export const projectAPI = {
  async get(page = 1, limit = 20) {
    try {
      const response = await fetch(
        `${url}?_page=${page}&_limit=${limit}&_sort=name`
      );
      const response_1 = await checkStatus(response);
      const data = await parseJSON(response_1);
      return convertToProjectModels(data);
    } catch (error) {
      console.log("log client error" + error);
      throw new Error(
        "There was an error retrieving the project. Please try again"
      );
    }
  },
  async put(project: Project) {
    try {
      const response = await fetch(`${url}/${project.id}`, {
        method: "PUT",
        body: JSON.stringify(project),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response_1 = await checkStatus(response);
      return parseJSON(response_1);
    } catch (error) {
      console.log("log client error" + error);
      throw new Error(
        "There was an error retrieving the project. Please try again"
      );
    }
  },
  async find(id: number) {
    const response = await fetch(`${url}/${id}`);
    const response_1 = await checkStatus(response);
    const item = await parseJSON(response_1);
    return convertToProjectModel(item);
  },
};
