const API_KEY = 'C5zUkrbCYxotsR8T8IxlrcHZtYi4ZWrvSBmQ59Hc';


/**
 * Get NASA's latest notifications
 * https://api.nasa.gov/
 */
export const getNASANotifications = async (): Promise<Array<iNotification>> =>  {
    const response: Promise<T> = await fetch("https://api.nasa.gov/DONKI/notifications?" + new URLSearchParams({
        api_key:API_KEY
    }))
    const data: Array<iNotification> = await response.json()

    return data.filter((obj) => obj.messageType != 'Report')
}


export interface iNotification {
    messageType: string;
    messageID: string;
    messageURL: string;
    messageIssueTime: string;
    messageBody: string;
}