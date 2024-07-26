// type BaseRequest<T, V> = (params?: T) => Promise<V>;

// type SuccessResponse<V> = {
//   code: "success";
//   data: V;
// };

// type ErrorResponse<E = Error> = {
//   code: "error";
//   error: E;
// };

// type BaseResponse<V, E> = Promise<SuccessResponse<V> | ErrorResponse<E>>;

// const requestHandler =
//   <T, V, E = Error>(request: BaseRequest<T, V>) =>
//   async (params?: T): BaseResponse<V, E> => {
//     try {
//       const data = await request(params);
//       return { code: "success", data };
//     } catch (e) {
//       return { code: "error", error: e as E };
//     }
//   };

// export { requestHandler };
// export type { BaseRequest, SuccessResponse, ErrorResponse, BaseResponse };
