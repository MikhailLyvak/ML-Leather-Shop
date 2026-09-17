export type ActionSuccessResponse<T> = {
  data: T
  success: true
}

export type ActionFailure = {
  error: string
  success: false
}

export type ActionErrorResponse = ActionFailure & {
  errorCode?: string
}

export type ActionResponse<T> = ActionSuccessResponse<T> | ActionErrorResponse
