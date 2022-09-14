import { toast } from "react-toastify";

const fetchService:
    ({ url, method, body, headers }: {
        url: string; method?: string;
        body?: any;
        headers?: any;
    }) =>
        Promise<{ data: any, status: number }> =
    async ({
        url,
        method = "GET",
        body,
        headers
    }) => {
        let status: number;
        try {
            const response = await fetch(url, {
                method: method,
                headers: headers,
                body: JSON.stringify(body)
            });
            status = response.status;
            const responseJson = await response.json();
            if (status === 200) {
                return { status: status, data: responseJson };
            } else {
                toast("Server Error")
                return { status: status, data: {} };
            }
        } catch (e) {
            toast("Server Error")
            return { status: 500, data: {} };
        }

    }
export { fetchService }