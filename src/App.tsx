import { NativeBaseProvider } from "native-base"
import Home from "./views/Home"

const App = () => {
    return (
        <NativeBaseProvider>
            <Home />
        </NativeBaseProvider>
    )
}

export default App