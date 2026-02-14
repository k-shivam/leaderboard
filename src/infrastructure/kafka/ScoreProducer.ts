import { Kafka } from "kafkajs"

const kafka = new Kafka({brokers: ["localhost:9092"]});
const producer = kafka.producer();

export async function publishScore(playerId: string, delta: number){
    await producer.send({
        topic: "score_updates",
        messages: [{ value: JSON.stringify({playerId, delta})}]
    })
}
