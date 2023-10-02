import { Image, Text, TouchableOpacity, View } from 'react-native'
import { checkImageURL } from '../../../../utils'
import styles from './nearbyjobcard.style'

const NearbyJobCard = ({ job, handleNavigate }) => {
	return (
		<TouchableOpacity style={styles.container} onPress={handleNavigate}>
			<View style={styles.textContainer}>
				<Text numberOfLines={1} style={styles.jobName}>
					{job.job_title}
				</Text>
				<Text style={styles.jobType}>{job.job_employment_type}</Text>
			</View>
		</TouchableOpacity>
	)
}

export default NearbyJobCard
