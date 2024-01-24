import { Text } from "react-native";

function MealDetailScreen({ route }) {
  const mealId = route.params.mealId;
  //params is referring to the params object in the useNavigate function in MealOverview

  return <Text>This is the Meal Detail screen ({mealId})</Text>;
}

export default MealDetailScreen;
