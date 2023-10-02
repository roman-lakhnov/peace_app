import React from 'react'
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Image,
	FlatList
} from 'react-native'
import { useRouter } from 'expo-router'
import { useState } from 'react'
import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const jobTypes = ['Low', 'Fine', 'High']

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
	const router = useRouter()
	const [activeJobType, setActiveJobType] = useState('Full-time')

	return (
		<View>
			<View style={styles.container}>
				<Text style={styles.userName}>Hello</Text>
				<Text style={styles.welcomeMessage}>How are you doing?</Text>
				<View style={styles.tabsContainer}>
					<FlatList
						data={jobTypes}
						keyExtractor={item => item}
						contentContainerStyle={{ columnGap: SIZES.small }}
						horizontal
						renderItem={({ item }) => (
							<TouchableOpacity
								style={styles.tab(activeJobType, item)}
								onPress={() => {
									setActiveJobType(item)
									router.push(`/search/${item}`)
								}}
							>
								<Text style={styles.tabText(activeJobType, item)}>{item}</Text>
							</TouchableOpacity>
						)}
					/>
				</View>
			</View>
		</View>
	)
}

export default Welcome
