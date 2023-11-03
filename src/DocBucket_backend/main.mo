import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";

actor {
    type Post = {
        userPrincipal : Principal;
        title : Text;
        description : Text;
    };

    type User = {
        username : Text;
        password : Text;
    };

    var posts = HashMap.HashMap<Nat, Post>(1, Nat.equal, Hash.hash);
    stable var postIdCount : Nat = 0;

    var users = HashMap.HashMap<Text, User>(1, Text.equal, Hash.hash);

    public func createUser (user : User) : async () {
        users.put(user.username, user);
    };

    public query func authenticateUser (username : Principal, password : Text) : async Bool {
    let userRes : ?User = users.get(username);
    switch (userRes) {
        case (?user) if (password == user.password) {
            return true;
        };
        case _ {
            return false;
        };
    };
};

    public func createPost (post : Post) : async () {
        let authenticated : Bool = await authenticateUser(post.userPrincipal, post.password);
        if (authenticated) {
            let id : Nat = postIdCount;
            postIdCount += 1;
            posts.put(id, post);
            Debug.console("Debug");
        } else {
            Debug.console("User not authenticated");
        };
    };

    public query func readPost(id : Nat) : async ?Post {
        let postRes : ?Post = posts.get(id);
        return postRes;
    };

    public func updatePost(id : Nat, post : Post) : async () {
        let authenticated : Bool = await authenticateUser(post.userPrincipal, post.password);
        if (authenticated) {
            posts.put(id, post);
        } else {
            Debug.console("User not authenticated");
        };
    };

    public func deletePost(id : Nat, userPrincipal : Principal, password : Text) : async () {
        let authenticated : Bool = await authenticateUser(userPrincipal, password);
        if (authenticated) {
            posts.remove(id);
        } else {
            Debug.console("User not authenticated");
        };
    };
};



