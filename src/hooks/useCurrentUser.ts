import { IUser } from "@lib/types/current-user"
import { CurrentUserContext} from "@contexts/CurrentUserContext"
import React from "react"
import { UserSessionAction } from "@lib/enums"
import { useEffect } from "react"
import { axiosInstance } from "@utils/axiosInstance"


export const useCurrentUser = ():IUser|undefined => {
  const [currentUser, setCurrentUser] = React.useState<IUser>();
  const { dispatch } = React.useContext(CurrentUserContext);

  // Fetch the current user from the API
  const getCurrentUser = async () => {
    try {
      const response = await axiosInstance.get("/api/auth/current-user", {
        withCredentials: true,
      });
      const userID = response.data[0].currentUser._id;
      if (userID) {
        const userDetails = await axiosInstance.get(`/api/user/${userID}`);
        setCurrentUser(userDetails.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Update the user state in the context
  const updateUserState = () => {
    if (currentUser && dispatch) {
      dispatch({
        type: UserSessionAction.SET_USER,
        payload: { user: currentUser },
      });
    }
  };

  // Fetch the current user when the component mounts
  useEffect(() => {
    getCurrentUser();
  }, []);

  // Update the user state when the current user changes
  useEffect(() => {
    updateUserState();
  }, [currentUser]);

  return currentUser;
  };