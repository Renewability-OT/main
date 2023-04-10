export interface Notification {
    message: string
    type: NotificationType
}

export enum NotificationType {
    Error = 'ERROR',
    Success = 'SUCCESS',
}