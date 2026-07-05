import { baseurl } from "@/config/baseurl";

export async function PATCH(request) {
  const cookie = request.headers.get("cookie") || "";
  const body = await request.json();

  const res = await fetch(`${baseurl}/userRoutes/update`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      ...(cookie && { cookie }),
    },
    body: JSON.stringify(body),
  });

  const data = await res.json();

  return new Response(JSON.stringify(data), {
    status: res.status,
    headers: { "Content-Type": "application/json" },
  });
}
