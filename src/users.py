import firebase_admin
from firebase_admin import credentials
from firebase_admin import auth
import json

cred = credentials.Certificate("evaint-firebase-sdk.json")
firebase_admin.initialize_app(cred)

# Iterate through all users. This will still retrieve users in batches,
# buffering no more than 1000 users in memory at a time.
for user in auth.ListUsersPage().iterate_all():
    print('User: ' + user.email)
    print(f'User data: {auth.get_user_by_email(user.email)._data}')

