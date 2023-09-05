import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useTheme } from "@react-navigation/native";

const MIN_PRICE = 0;
const MAX_PRICE = 500;
const FilterView = () => {
  const [minPrice, setMinPrice] = useState(50);
  const [maxPrice, setMaxPrice] = useState(250);
  const theme = useTheme();
  return (
    <View style={{ paddingVertical: 24, gap: 24 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 24,
        }}
      >
        <Text style={{ flex: 1, fontSize: 20, fontWeight: "700" }}>
          Filters
        </Text>
        <TouchableOpacity>
          <Text>Filter</Text>
        </TouchableOpacity>
      </View>
      {/* price range */}
      <View style={{ paddingHorizontal: 24 }}>
        <View style={{ marginBottom: 16 }}>
          <Text>Price range</Text>
        </View>

        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: theme.colors.border,
            position: "relative",
          }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 12,
          }}
        >
          <Text style={{ color: theme.colors.text, opacity: 0.5 }}>
            ${MIN_PRICE}{" "}
          </Text>
          <Text style={{ color: theme.colors.text, opacity: 0.5 }}>
            $ {MAX_PRICE}{" "}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FilterView;
