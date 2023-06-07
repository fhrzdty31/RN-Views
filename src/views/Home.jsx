import { useState, useEffect } from "react"
import { ScrollView, Box, Image, Text, Button, AlertDialog } from "native-base"

const Home = () => {

    const data = {
        content_text: "Google officially announced its much-anticipated Pixel phones; the Pixel and Pixel XL, on October 4. We attended Google’s London UK event, mirroring the main one taking place in San Francisco, US, where the firm unwrapped the new Android 7.1 Nougat devices which will apparently usurp Google’s long-standing Nexus series.",
        content_specs_display: "5.0 inches\nFHD Amoled at 441ppi\n2.5D Corning® Gorilla® Glass 4",
        content_specs_size: "5.6 x 2.7 x 0.2 ~ 0.3 inches\n143.8 x 69.5 x 7.3 ~ 8.5 mm",
        content_specs_battery: "2,770 mAh battery\nStandby time (LTE): up to 19 days\nTalk time (3g/WCDMA): up to 26 hours\nInternet use time (Wi-Fi): up to 13 hours\nInternet use time (LTE): up to 13 hours\nVideo playback: up to 13 hours\nAudio playback (via headset): up to 110 hours\nFast charging: up to 7 hours of use from only 15 minutes of charging",
        price: "$735"
    }

    const [isOpen, setISOpen] = useState(false)

    useEffect(
        () => {
            if (isOpen) {
                const timer = setTimeout(
                    () => {
                        setISOpen(false)
                    }, 1000
                )
                return () => clearTimeout(timer)
            }
        }, [isOpen]
    )

    return (
        <>
        <ScrollView>
            <Box position={"relative"}>
                <Image source={require('../assets/pixel_google.jpg')} alt="Google Pixel" resizeMode="contain" height={"240"} />
                <Box position={"absolute"} bottom={"4"} left={"4"} background={"gray.300"} padding={"2"} display={"flex"} flexDirection={"row"} rounded={"md"}>
                    <Image source={require('../assets/ic_collections_white_18dp.png')} alt="Image" />
                    <Text fontSize={"lg"} fontWeight={"bold"} color={"white"} marginLeft={"1"}>6 Photos</Text>
                </Box>
            </Box>
            <Box marginX={"4"} marginY={"5"}>
                <Text fontSize={"3xl"} fontWeight={"extrabold"} marginLeft={"2"} marginBottom={"3"}>{data.price}</Text>
                <Text fontSize={"md"} marginBottom={"4"}>{data.content_text}</Text>
                <Text fontSize={"lg"} fontWeight={"bold"} color={"gray.500"} marginBottom={"2"}>Spesifikasi</Text>
                <Box display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
                    <Text width={"1/4"} fontSize={"md"} fontWeight={"bold"} color={"gray.400"} marginBottom={"3"}>Display</Text>
                    <Text width={"3/4"} marginBottom={"3"}>{data.content_specs_display}</Text>
                    <Text width={"1/4"} fontSize={"md"} fontWeight={"bold"} color={"gray.400"} marginBottom={"3"}>Size</Text>
                    <Text width={"3/4"} marginBottom={"3"}>{data.content_specs_size}</Text>
                    <Text width={"1/4"} fontSize={"md"} fontWeight={"bold"} color={"gray.400"} marginBottom={"3"}>Battery</Text>
                    <Text width={"3/4"} marginBottom={"3"}>{data.content_specs_battery}</Text>
                </Box>
            </Box>
            <Box margin={"5"}>
                <Text color={"gray.400"}>Dijual Oleh</Text>
                <Box display={"flex"} flexDirection={"row"} alignItems={"center"} marginY={"3"}>
                    <Image source={require('../assets/img001.jpg')} alt={"Profile"} width={60} height={60} rounded={"full"} />
                    <Text fontSize={"xl"} fontWeight={"extrabold"} marginLeft={"2"}>Fahreza Ditya Alfandry</Text>
                </Box>
                <Button onPress={() => setISOpen(true)} rounded={"xl"}>Beli</Button>
            </Box>
        </ScrollView>
        <AlertDialog isOpen={isOpen} onClose={() => setISOpen(false)}>
            <AlertDialog.Content>
                <AlertDialog.Header>Successfully purchased an item!</AlertDialog.Header>
            </AlertDialog.Content>
        </AlertDialog>
        </>
    )
}

export default Home