import { MOCK_API } from '../config'

export default function* rootSaga() {
  if (MOCK_API) {
    console.log('[API] using MOCK (no authen)')
    yield [
      watchApplicationSagasMock(),
    ]
  } else {
    console.log('[API] using ittp-api')
    yield [
      watchLoginSagas(),
      watchApplicationSagas(),
    ]
  }
}