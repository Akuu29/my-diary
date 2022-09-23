use std::env;
use actix_web::{self, HttpServer, App};
use dotenv::dotenv;

#[actix_web::main]
async fn main() -> std::io::Result<()>{
    dotenv().ok();

    env_logger::init();

    let host = env::var("HOST").expect("Please set HOST in .env");
    let port = env::var("PORT").expect("Please set PORT in .env");

    HttpServer::new(move || {
        App::new()
    })
    .bind(format!("{}:{}", host, port))?
    .run()
    .await

}
