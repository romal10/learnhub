// Initialize Google API
function initializeGoogleAPI() {
    gapi.load('client:auth2', function() {
      gapi.client.init({
        clientId: 'YOUR_ACTUAL_GOOGLE_CLIENT_ID',
        scope: 'email profile',
        plugin_name: 'VideoHub'
      }).then(function() {
        const auth2 = gapi.auth2.getAuthInstance();
        
        if (googleAuthBtn) {
          googleAuthBtn.addEventListener('click', function() {
            auth2.signIn();
          });
        }
        
        auth2.isSignedIn.listen(function(isSignedIn) {
          if (isSignedIn) {
            const googleUser = auth2.currentUser.get();
            handleGoogleSignIn({
              credential: googleUser.getAuthResponse().id_token,
            });
          }
        });
      });
    });
  }
  
  // Load YouTube IFrame API
  let player;
  function onYouTubeIframeAPIReady() {
    console.log('YouTube IFrame API Ready');
  }
  
  // Google Sign-In handler
  function handleGoogleSignIn(response) {
    try {
      if (!response.credential) {
        console.error('No credential received from Google Sign-In');
        return;
      }
      
      const credential = response.credential;
      const profile = jwt_decode(credential);
      
      if (!profile) {
        console.error('Could not decode Google Sign-In token');
        return;
      }
      
      const newUser = {
        email: profile.email,
        username: profile.name,
        profileImage: profile.picture,
        bio: '',
        googleId: profile.sub
      };
      
      // Add user to state if not exists
      if (!state.users.find(u => u.email === newUser.email)) {
        state.users.push(newUser);
        saveUsers();
      }
      
      state.currentUser = newUser;
      state.isLoggedIn = true;
      
      // Update UI
      if (landingPage) landingPage.style.display = 'none';
      if (loginPage) loginPage.style.display = 'none';
      if (mainApp) mainApp.style.display = 'block';
    } catch (error) {
      console.error('Error in Google Sign-In:', error);
      alert('Failed to sign in with Google. Please try again.');
    }
  }
  
  // Remaining JavaScript functions and app initialization code
  