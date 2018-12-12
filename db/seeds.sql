use gift_help_db;

insert into requests(req_email, req_msg, budget, category) 
values
("testUser@email.com","I dont know what to get my friend. He likes hiking and is obsessed with his dog", 200, "General"),
("A_Different_User@gmail.com", "Ahhh!!! My girlfriends birthday is coming up and I dont know what to get her. She loves music and spends all day on his computer", 150, "tech"),
("AnotherEmailAccount@yahoo.com", "I'm going to a wedding as a plus one and I dont know what to get the couple. I know nothing about them. I just need something everyone will love!", 75, "general");

insert into answers(res_msg, shop_link, req_id)
values
("Why not get him a portrait of his dog! I have one and I love it. I worked with someone on Etsy and I love their work. Check out it!!","https://www.etsy.com/listing/104917806/custom-pet-portrait-painting", 1),
("Get her an Apple Music subscription! You can prepay the year for $99.","https://www.apple.com/apple-music/",2),
("Its always nice to get them something anyone can enjoy. Maybe an Echo Dot?", "https://www.amazon.com/dp/B06XCM9LJ4/ref=fs_ods_aucc_rd", 3);
