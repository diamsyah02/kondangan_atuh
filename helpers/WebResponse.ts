const wr = (statusCode: number, message: string, result: any) => {
  const data = {
    statusCode: statusCode,
    message: message,
    result: result
  }
  return data
}

export default wr