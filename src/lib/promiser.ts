interface PromiseError {
  error: any,
  message: string
}
async function promiser<T>(promise: Promise<T>): Promise<[T, null] | [null, PromiseError]> {
  try {
    const data = await promise
    console.log('data', data);
    return [data, null]
  } catch (error: any & {message: string}) {
    return [null, {
      error,
      message: error.message ?? "Some Error has occured"
    }]
  }
}

export default promiser
