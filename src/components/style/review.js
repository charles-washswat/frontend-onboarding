import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  reviewArea: {
    marginTop: 16,
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#F1F7FF",
  },
  titleBox: {
    flexWrap: "wrap",
    flexDirection: "row",
    marginBottom: 8,
  },
  reviewTitle: {
    fontWeight: "bold",
    color: "#181818",
  },
  reviewCount: {
    marginLeft: 8,
    color: "#9D9D9D",
  },
  reviewScope: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  areaScope: {
    flexWrap: "wrap",
    flexDirection: "row",
  },
  reviewText: {
    marginTop: 13,
    lineHeight: 20,
    color: "#000",
  },
});

export default styles;
