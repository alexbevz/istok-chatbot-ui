export interface OpenAIModel {
  id: string;
  name: string;
  maxLength: number; // maximum length of a message
  tokenLimit: number;
}

export enum OpenAIModelID {
  PHI_2 = 'phi-2',
  // TODO: Добавление названий моделей
  // GPT_3_5 = 'gpt-3.5-turbo',
  // GPT_4 = 'gpt-4',
}

// in case the `DEFAULT_MODEL` environment variable is not set or set to an unsupported model
export const fallbackModelID = OpenAIModelID.PHI_2;

export const OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
    [OpenAIModelID.PHI_2]: {
    id: OpenAIModelID.PHI_2,
    name: 'phi-2',
    maxLength: 12000,
    tokenLimit: 4000,
  },
  // TODO: Добавление параметров моделей
  // [OpenAIModelID.GPT_3_5]: {
  //   id: OpenAIModelID.GPT_3_5,
  //   name: 'GPT-3.5',
  //   maxLength: 12000,
  //   tokenLimit: 4000,
  // },
  // [OpenAIModelID.GPT_4]: {
  //   id: OpenAIModelID.GPT_4,
  //   name: 'GPT-4',
  //   maxLength: 24000,
  //   tokenLimit: 8000,
  // },
};
