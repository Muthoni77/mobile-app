import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Icons from "@expo/vector-icons/MaterialIcons";
import MasonryList from "@react-native-seoul/masonry-list";
import { color } from "react-native-reanimated";
import { BlurView } from 'expo-blur';


const Categories = [
  "Clothing",
  "Shoes",
  "Accessories",
  "Accessories 2",
  "Accessories 3",
  "Accessories 4",
];

const AVATAR_URL = "https://clipart-library.com/images/ATbrxjpyc.jpg";

const HomeScreen = () => {
  const { colors } = useTheme();
  const [categoryIndex, setCategoryIndex] = useState(0);
  return (
    <ScrollView>
      <SafeAreaView style={{ paddingVertical: 24, gap: 24 }}>
        <View
          style={{
            paddingHorizontal: 24,
            paddingVertical: 24,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Image
            source={{ uri: AVATAR_URL }}
            style={{ width: 32, aspectRatio: 1, borderRadius: 32 }}
            resizeMode="cover"
          />
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 8,
                color: colors.text,
              }}
              numberOfLines={1}
            >
              Hi, John👋
            </Text>
            <Text
              style={{ color: colors.text, opacity: 0.75 }}
              numberOfLines={1}
            >
              Discover Trading with us
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
            }}
          >
            <Icons name="notifications" size={24} color={colors.text} />
          </TouchableOpacity>
        </View>
        {/* Search Bar Section */}
        <View style={{ flexDirection: "row", paddingHorizontal: 24, gap: 12 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              height: 52,
              borderRadius: 52,
              borderWidth: 1,
              borderColor: colors.border,
              alignItems: "center",
              paddingHorizontal: 24,
              flexDirection: "row",
              gap: 12,
            }}
          >
            <Icons
              name="search"
              size={24}
              color={colors.text}
              style={{ opacity: 0.5 }}
            />
            <Text
              style={{
                flex: 1,
                fontSize: 16,
                color: colors.text,
                opacity: 0.5,
              }}
            >
              Search
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={openFilterModal}
            style={{
              width: 52,
              aspectRatio: 1,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 52,
              backgroundColor: colors.primary,
            }}
          >
            <Icons name="tune" size={24} color={colors.background} />
          </TouchableOpacity>
        </View>
        {/* grid View */}
        <View style={{ paddingHorizontal: 24 }}>
          {/* title- bar */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "700" }}>
              New Collections
            </Text>
            <TouchableOpacity>
              <Text>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", height: 200, gap: 12 }}>
            {/* cards */}
            <View
              style={{
                flex: 1,
              }}
            >
              <Card />
            </View>
            <View style={{ flex: 1, gap: 12 }}>
              <Card />
              <Card />
            </View>
          </View>
        </View>
        {/* category section */}
        <FlatList
          data={Categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 16,
            gap: 12,
          }}
          renderItem={({ item, index }) => {
            const isSelected = categoryIndex === index;
            return (
              <TouchableOpacity
                onPress={() => setCategoryIndex(index)}
                style={{
                  backgroundColor: isSelected ? colors.primary : colors.card,
                  paddingHorizontal: 20,
                  paddingVertical: 12,
                  borderRadius: 100,
                  borderWidth: isSelected ? 0 : 1,
                  borderColor: colors.border,
                }}
              >
                <Text
                  style={{
                    color: isSelected ? colors.background : colors.text,
                    fontWeight: "600",
                    fontSize: 14,
                    opacity: isSelected ? 1 : 0.5,
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        {/* masonry */}
        <View style={{}}>
          <MasonryList
            data={[1, 2, 3, 4, 5, 45, 67, 67]}
            keyExtractor={(item): string => item}
            numColumns={2}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, i }) => (
              <View
                style={{
                  aspectRatio: i === 0 ? 1 : 2 / 3,
                  position: "relative",
                  overflow: "hidden",
                  backgroundColor: "red",
                  marginTop: 12,
                  marginLeft: 12,
                  borderRadius: 24,
                }}
              >
                <Image
                  source={{
                    uri: "https://www.whitehouseblackmarket.com/Product_Images/570349062_190.jpg?imgPolicy=productMed",
                  }}
                  resizeMode="cover"
                  style={StyleSheet.absoluteFill}
                />
                <View style={{ flexDirection: "row", padding: 16 ,gap:8}}>
                  <Text
                    style={{
                      flex: 1,
                      fontSize: 16,
                      fontWeight: "600",
                      color: colors.text,
                    }}
                  >
                    PUMA everyday hustle
                  </Text>
                  <View
                    style={{
                      borderRadius: 100,
                      height: 32,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: colors.background,
                      aspectRatio:1,
                    }}
                  >
                    <Icons 
                    name="favorite-border"
                    size={20}
                    color={colors.text}
                    />
                  </View>
                </View>
                <View style={{flex:1}}>
                  <BlurView style={{flexDirection : "row",backgroundColor:colors.background, alignItems:'center'}} intensity={20} >

                  </BlurView>

                    </View>
              </View>
            )}
            onEndReachedThreshold={0.1}
          />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default HomeScreen;

const Card = () => {
  return (
    <View
      style={{
        flex: 1,
        position: "relative",
        overflow: "hidden",
        borderRadius: 24,
      }}
    >
      <Image
        // source={require("../assets/images/download.jpeg")}
        source={{
          uri: "https://iwantyoutoknow.co.uk/wp-content/uploads/2018/03/new-combo3.jpg",
        }}
        resizeMode="cover"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
        }}
      />
      <View
        style={{
          position: "absolute",
          top: 16,
          left: 16,
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: "rgba(0,0,0,0.25)",
          borderRadius: 100,
        }}
      >
        <Text style={{ fontSize: 14, fontWeight: "500", color: "#fff" }}>
          130$
        </Text>
      </View>
    </View>
  );
};
