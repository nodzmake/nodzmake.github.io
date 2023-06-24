import { AxiosResponse } from 'axios'

export interface propType {
  initialValues: { num: number }
  handleSubmit: (e: any) => Promise<AxiosResponse<any, any>>
  validateForm: () => any
}
