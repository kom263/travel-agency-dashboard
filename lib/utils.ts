import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";

export function cn(...inputs: ClassValue[]){
    return twMerge(clsx(inputs))
}

export const formalDate = (dateString: string): string => {
    return dayjs(dateString).format("MMMM DD, YYYY");
}

export function parseMarkdownToJson(markdownText: string): unknown | null 