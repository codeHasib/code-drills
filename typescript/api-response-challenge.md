Challenge 1 — TypeScript
Generic API Response

Folder:

typescript/api-response/

Build:

type ApiResponse<T>

Requirements:

Support BOTH:

{
success: true,
data: ...
}

and

{
success: false,
error: ...
}

Create:

User type
Product type

Then create:

fetchUsers()
fetchProducts()
fetchFailedRequest()

Return properly typed responses.

Goal:

Generics
Discriminated unions
Type narrowing
