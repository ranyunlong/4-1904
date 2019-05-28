db.docs.aggregate([
    {
        $group: {
            username: $user, 
            total: {
                $sum: $title
            }
        }
    }
])